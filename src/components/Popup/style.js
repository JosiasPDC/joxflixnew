import styled from 'styled-components';

export const PopupContainer = styled.span`
padding: 5px;

.popup-content {
    color: white;
    border-radius: 10px;
    border: 2px solid #2A7AE4 !important;
    background: black !important;
    width: 20% !important;
}

.popupConfirma-content {
    width: 40% !important;
    border: 2px solid red !important;
}

@media only screen and (max-width: 600px) {
  .popup-content {
      width: 50% !important;
  }

  .popupConfirma-content {
      width: 70% !important;
  }
}

.modal {
    font-size: 12px;    
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }
  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }

  button {
    padding: 5px;
  }

  span {
    padding: 3px;
  }
  `;