import style from './ScanTablePage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import ButtonsSet from '../../components/ButtonsSet/ButtonsSet';
import { useState, useEffect } from 'react';
import { api } from '../../utilitis/Api.js';
import { useNavigate } from 'react-router-dom';

export default function ScanTablePage({ nextPage }) {
  const navigate = useNavigate();
  const token_ex = localStorage.getItem('token');
  const [newtables, setTables] = useState([]);
  const [newStatuses, setStatuses] = useState([]);
  const [newId, setNewId] = useState([]);
  useEffect(() => {
    api
      .getTables(token_ex)
      .then((res) => {
        const newtablesArr = [];
        const newStatusesArr = [];
        const newId = [];
        for (let i = 0; i < res.length; i++) {
          newtablesArr.push(res[i].name);
          newStatusesArr.push(res[i].available);
          newId.push(res[i].id);
        }
        setTables(newtablesArr);
        setStatuses(newStatusesArr);
        setNewId(newId);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, [token_ex]);

  function postTable(id) {
    api.postTable(id, token_ex).then((res) => {
      navigate('/printer');
    });
  }
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Сканируйте штрих код стола</h2>
      <p className={style.Subtitle}>или выберите его из списка</p>
      <ButtonsSet btnType="TableButton" nextPage={nextPage} set={newtables} statuses={newStatuses} postTable={postTable} newId={newId} />
      <StagesBar stage={1} />
      <BottomMenu />
    </main>
  );
}
