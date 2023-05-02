import { InputSpace } from "../../components/Auth/SignUp/InputSpace";
import { useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { authenticateUser, getAuthenticatedUser } from "../../services/auth";
import { useNavigate } from "react-router";
import { Divider } from "../../components/Global/Divider";
import { Link } from "react-router-dom";
import { updateUser } from "../../services/users";
import { toast } from "react-hot-toast";

export function Account() {
  const navigate = useNavigate();
  const authenticatedUser = getAuthenticatedUser();
  const dateBirth = new Date(authenticatedUser?.birth_date);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);

  useEffect(() => {
    if (!authenticatedUser) {
      navigate("/");
    }
  });

  async function changeUser(e) {
    e.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const day = dayInputRef.current.value
    const month = monthInputRef.current.value
    const year = yearInputRef.current.value
    const birthDate = new Date(year, month, day)

    await updateUser(authenticatedUser.id, {email, password,birth_date: birthDate.toISOString().split('T')[0]})
  await authenticateUser(email, password)
  toast.success('Dados alterados com sucesso!')  
  navigate('/')
}

  return (
    <div>
      <div className="max-w-md px-4 ml-8 mb-10 text-white">
        <h1 className="text-4xl font-bold mt-10 mb-8">Editar Perfil</h1>

        <form className="flex flex-col gap-6" onSubmit={changeUser}>
          <InputSpace
            ref={emailInputRef}
            label="E-mail"
            type="email"
            id="email"
            className="e-mail text-black"
            placeholder="Insira seu e-mail."
            defaultValue={authenticatedUser?.email}
          />

          <InputSpace
            ref={passwordInputRef}
            label="Senha"
            type="password"
            id="password"
            className="password text-black"
            placeholder="Crie uma senha."
            defaultValue={authenticatedUser?.password}
          />

          <div className="input-space">
            <label className="form-label font-bold">Data de nascimento</label>

            <div className="flex justify-between">
              <div className="input-space w-1/5">
                <label htmlFor="day" className="form-label">
                  Dia
                </label>
                <input
                  ref={dayInputRef}
                  type="number"
                  id="day"
                  name="day"
                  placeholder="DD"
                  className="w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787] text-black"
                  defaultValue={dateBirth.getDate()}
                />
              </div>

              <div className="input-space w-[45%]">
                <label htmlFor="month" className="form-label">
                  Mês
                </label>
                <div className="relative">
                  <select
                    ref={monthInputRef}
                    name="month"
                    id="month"
                    className="w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787] appearance-none required:invalid:text-neutral-500 text-black"
                    defaultValue={dateBirth.getMonth()}
                  >
                    <option value="0">janeiro</option>
                    <option value="1">fevereiro</option>
                    <option value="2">março</option>
                    <option value="3">abril</option>
                    <option value="4">maio</option>
                    <option value="5">junho</option>
                    <option value="6">julho</option>
                    <option value="7">agosto</option>
                    <option value="8">setembro</option>
                    <option value="9">outubro</option>
                    <option value="10">novembro</option>
                    <option value="11">dezembro</option>
                  </select>
                  <ChevronDownIcon className="text-neutral-500 w-6 aspect-square absolute right-4 top-3 pointer-events-none" />
                </div>
              </div>

              <div className="input-space w-1/4">
                <label htmlFor="year" className="form-label">
                  Ano
                </label>
                <input
                  ref={yearInputRef}
                  type="number"
                  id="year"
                  name="year"
                  placeholder="AAAA"
                  className="w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787] text-black"
                  defaultValue={dateBirth.getFullYear()}
                />
              </div>
            </div>
          </div>

          <div className="input-space">
            <label htmlFor="gender" className="form-label font-bold">
              Sexo
            </label>
            <div className="relative">
              <select
                ref={monthInputRef}
                name="month"
                id="month"
                className="w-full h-12 px-3.5 border-none rounded shadow-[inset_0_0_0_1px_#878787] appearance-none required:invalid:text-neutral-500 text-black"
                defaultValue={authenticatedUser?.gender_id}
              >
                <option value="4">Outros</option>
                <option value="5">Prefiro não dizer</option>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
                <option value="3">Não Binário</option>
              </select>
              <ChevronDownIcon className="text-neutral-500 w-6 aspect-square absolute right-4 top-3 pointer-events-none" />
            </div>
          </div>

          <Divider />
          <div className="flex flex-wrap justify-between items-center">
            <Link to="/" className="font-bold hover:underline">
              Cancelar
            </Link>

            <input
              type="submit"
              value="Salvar Perfil"
              className="w-fit text-black text-lg font-bold text-center bg-spotify-green-light px-12 py-4 border-none rounded-full transition-all hover:bg-spotify-green hover:cursor-pointer hover:scale-105 active:bg-spotify-green-dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
