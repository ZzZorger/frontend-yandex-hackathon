import { useState } from 'react';
import style from './BarcodePopup.module.css';
import { Link } from 'react-router-dom';

export default function BarcodePopup(props) {
  // const [barcode, setBarcode] = useState('9234 5678 234 32');
  const [barcode, setBarcode] = useState(props.initValue);
  function handleBarcodeChange(e) {
    setBarcode(e.target.value);
  }
  function submitButtonHandler() {
    // props.onSubmitButton && props.onSubmitButton(barcode);
    if (props.onSubmitButton) {
      props.onSubmitButton(barcode, { background: '#2AAD2E', color: '#FFFFFF' });
    }
  }
  return (
    <div className={`${style.Popup} ${props.isOpen && style.PopupOpened}`}>
      <div className={style.Content}>
        <button className={style.CloseButton} type="button" aria-label="закрыть окно" onClick={props.onClose} />
        <h2 className={style.Title}>{props.title}</h2>
        <form className={style.Form}>
          <fieldset className={style.Fieldset}>
            <div className={style.Field}>
              <input
                id="barcode"
                className={style.Input}
                type="text"
                name="barcode"
                required
                onChange={handleBarcodeChange}
                value={barcode}
              />
              <span className={style.InputSpan} name="Error" />
            </div>
          </fieldset>
          <Link to={props.onSubmit} className={style.SubmitLink} onClick={props.onClose}>
            <button className={style.SubmitButton} type="submit" onClick={submitButtonHandler}>
              Применить
            </button>
          </Link>
          {/* <Link to={props.onSubmit} className={style.SubmitButton} onClick={props.onClose}>
            Применить
          </Link> */}
          <button className={style.SubmitButton} type="submit" onClick={props.onSubmit}>
            Применить
          </button>
          {isPack ? <button className={style.SubmitButton} type="button" onClick={props.handelClickBtn}></button> : null}
        </form>
      </div>
    </div>
  );
}
