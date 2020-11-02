
import React from 'react';
import Popup from "reactjs-popup";
import { PopupContainer } from './style';
import categoriasRepository from '../../repositories/categorias';
import { isAuthenticated } from "../../services/auth";

export default ({
    tituloItem,
    itemId
  }) => (
    <PopupContainer>


        
        {isAuthenticated() ? (<span></span>) : (<span></span>)}



        <Popup trigger={<button className="button"> Editar </button>} modal>
        {close => (
            <div className="modal">
                <div className="header"> Opções </div>
                <div className="content">
                    {" "}
                    Qual ação que realizar na categoria "{tituloItem}"?
                </div>
                <div className="actions">
                    <span>           
                        <Popup
                            trigger={<button className="button"> Excluir </button>}
                            position="top center"
                            closeOnDocumentClick
                            className="popupConfirma"
                        >
                            <span>
                            Tem certeza que deseja concluir essa ação?
                            </span>
                            <div><button
                            className="button"
                            onClick={() => {
                                categoriasRepository.remove(itemId); 
                            }}
                            >
                            Sim
                            </button></div>
                        </Popup>
                    </span>
                    <span>
                        <button
                        className="button"
                        onClick={() => {
                            console.log("modal closed ");
                            close();
                        }}
                        >
                        Editar
                        </button>
                    </span>
                    <span>
                        <button
                        className="button"
                        onClick={() => {
                            console.log("modal closed ");
                            close();
                        }}
                        >
                        Cancelar
                        </button>
                    </span>
                </div>
            </div>
        )}
        </Popup>
    </PopupContainer>
  );