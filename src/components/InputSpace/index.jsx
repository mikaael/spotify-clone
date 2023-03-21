function InputSpace({ label, id, type, classe, placeholder, telefone, spaner }) {
  return (
    <div className="input-space">
      <label for={id}>{label}</label>
      <input type={type} className={classe} id={id} placeholder={placeholder} />
      { telefone&&
        <a className="link-phone" href="">
          Usar número de telefone.
        </a>
      }

      { spaner&&
      <p className="profile-span">Isso aparece no seu perfil.</p>
      }

    </div>
  );
}
export default InputSpace;
