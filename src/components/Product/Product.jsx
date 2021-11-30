import React, { useState } from "react";
import style from "./Product.module.css";
import { FaRegArrowAltCircleDown as RowDown } from "react-icons/fa";
import { AiOutlineMinusCircle as Minus } from "react-icons/ai";
import { AiOutlinePlusCircle as Plus } from "react-icons/ai";
import { FiCheckCircle as Check } from "react-icons/fi";
import Select from "react-select";

function Product({ addCart, data }) {
    const { id, name, size, ingredients, sauce, accompaniment, img } = data;

    const [description, setdescription] = useState(false);
    const [selectAccompaniment, setselectAccompaniment] = useState(null);
    const [selectSauce, setselectSauce] = useState(null);
    const [selectSize, setselectSize] = useState(null);
    const changeAccompaniment = (value) => {
        setselectAccompaniment(value);
    };
    const changeSauce = (value) => {
        setselectSauce(value);
    };
    const changeSize = (value) => {
        setselectSize(value);
    };

    return (
        <div>
            <div className={style.boxMobile}>
                <div className={style.info}>
                    <img
                        className={style.infoImg}
                        src={img}
                        alt="name"
                        border="0"
                    />

                    <div className={style.infoGeneral}>
                        <h2 className={style.name}>{name}</h2>

                        {/* {price.map((e) => <p className={style.price}>{e}</p>)} */}

                        {ingredients ? (
                            <div
                                className={style.button}
                                onClick={() => setdescription(!description)}
                            >
                                <RowDown />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div
                    className={
                        description
                            ? `${style.description} ${style.descriptionVisible}`
                            : `${style.description} ${style.descriptionHide}`
                    }
                >
                    {ingredients ? <p>{ingredients}</p> : ""}

                    <div>
                        {sauce ? (
                            <Select
                                className={style.selector}
                                value={selectSauce}
                                options={sauce}
                                onChange={changeSauce}
                            />
                        ) : (
                            ""
                        )}
                    </div>

                    <div>
                        {accompaniment ? (
                            <Select
                                className={style.selector}
                                value={selectAccompaniment}
                                options={accompaniment}
                                onChange={changeAccompaniment}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className={style.select}>
                    <div>
                        <select className={style.selector}>
                            {size ? (
                                <Select
                                    value={selectSize}
                                    options={size}
                                    onChange={changeSize}
                                />
                            ) : (
                                ""
                            )}
                        </select>
                    </div>

                    <div className={style.finalSelector}>
                        <Minus className={style.btn} />
                        <div className={style.total}>
                            <p>valor / cantidad</p>
                        </div>
                        <Plus className={style.btn} />
                    </div>

                    <button className={style.cart} onClick={() => addCart(id)}>
                        añadir
                        <Check />
                    </button>
                </div>
            </div>

            <div className={style.boxDesktop}>
                <div className={style.info}>
                    <img
                        className={style.infoImg}
                        src={img}
                        alt="name"
                        border="0"
                    />

                    <div className={style.infoGeneral}>
                        <h2 className={style.name}>{name}</h2>
                        {/* {price.map((e) => <p className={style.price}>{e}</p>)} */}
                    </div>
                </div>

                {ingredients ? (
                    <div className={style.description}>
                        {ingredients ? <p>{ingredients}</p> : ""}

                        <div>
                            {sauce ? (
                                <Select
                                    className={style.selector}
                                    value={selectSauce}
                                    options={sauce}
                                    onChange={changeSauce}
                                />
                            ) : (
                                ""
                            )}
                        </div>

                        <div>
                            {accompaniment ? (
                                <Select
                                    className={style.selector}
                                    value={selectAccompaniment}
                                    options={accompaniment}
                                    onChange={changeAccompaniment}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div className={style.select}>
                    <div className={style.finalSelector}>
                        <div className={style.size}>
                            <p>sola</p>
                        </div>
                        <Minus className={style.btn} />
                        <p>un</p>
                        <Plus className={style.btn} />
                    </div>

                    <div className={style.finalSelector}>
                        <div className={style.size}>
                            <p>en combo</p>
                        </div>
                        <Minus className={style.btn} />
                        <p>un</p>
                        <Plus className={style.btn} />
                    </div>

                    <div className={style.finalSelector}>
                        <div className={style.total}>
                            <p>valor total</p>
                        </div>
                    </div>

                    <button className={style.cart} onClick={() => addCart(id)}>
                        añadir
                        <Check />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
