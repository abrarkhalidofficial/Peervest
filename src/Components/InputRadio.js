import React from "react";

export default function InputRadio({
  label,
  placeholder,
  required,
  description,
  options,
}) {
  return (
    <div className="start__up__container__form__input__box">
      <div
        className="start__up__container__form__input__box__label"
        style={description ? { marginBottom: ".3em" } : null}
      >
        {label}{" "}
        <div className="start__up__container__form__input__box__label__required">
          {required ? "*" : null}
        </div>
      </div>
      {description ? (
        <div className="start__up__container__form__input__box__label__explain">
          {description}
        </div>
      ) : null}
      <div className="start__up__container__form__input__box__content">
        {options.map((item) => {
          return (
            <>
              <input
                type="radio"
                name={
                  "start__up__container__form__input__box__radio__label" +
                  placeholder
                }
                id={
                  "start__up__container__form__input__box__radio__label" +
                  item.label
                }
                className="start__up__container__form__input__box__radio__input"
              />
              <label
                htmlFor={
                  "start__up__container__form__input__box__radio__label" +
                  item.label
                }
                className="start__up__container__form__input__box__radio__label"
                style={
                  item.label === "Other:"
                    ? {
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                      }
                    : null
                }
              >
                {item.label}
                {item.label === "Other:" ? (
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="start__up__container__form__input__box__field"
                    style={{ flex: 1, marginLeft: 20 }}
                  />
                ) : null}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
