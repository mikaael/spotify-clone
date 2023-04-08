import { Link } from "react-router-dom";

import spotifyLogo from "../../assets/spotify-logo.png";
import appleLogo from "../../assets/apple-logo.png";
import facebookLogo from "../../assets/facebook-logo.webp";
import googleLogo from "../../assets/google-logo.png";
import monthSelector from "../../assets/selector.svg";
import "./index.css";
import InputSpace from "../../components/Auth/SignUp/InputSpace";

function SignUp() {
  return (
    <div>
      <header id="header">
        <Link to="/">
          <img src={spotifyLogo} id="logo" alt="Header Image" />
        </Link>
      </header>
      <div className="signup">
        <h1>Inscreva-se grátis e comece a curtir.</h1>
        <div className="shortcut-login">
          <button className="google-sc" type="button">
            <img src={googleLogo} id="google" alt="Login with Google" />
          </button>
          <button className="facebook-sc" type="button">
            <img src={facebookLogo} id="facebok" alt="Login with Facebook" />
          </button>
          <button className="apple-sc" type="button">
            <img src={appleLogo} id="apple" alt="Login with Apple" />
          </button>
        </div>
        <div className="divider">
          <hr />
          <span>ou</span>
          <hr />
        </div>
        <form>
          <InputSpace
            label="Qual o seu e-mail?"
            type="email"
            id="email1"
            classe="e-mail"
            placeholder="Insira seu e-mail."
            telefone
          />

          <InputSpace
            label="Confirme seu e-mail"
            type="email"
            id="email2"
            classe="e-mail"
            placeholder="Insira o e-mail novamente."
          />

          <InputSpace
            label="Crie uma senha."
            type="password"
            id="password"
            classe="password"
            placeholder="Crie uma senha."
          />

          <InputSpace
            label="Como devemos chamar você?"
            type="text"
            id="text"
            classe="text"
            placeholder="Insira um nome de perfil."
            spaner
          />

          <div className="input-space">
            <label htmlFor="data">Qual a sua data de nascimento?</label>

            <div className="date-input">
              <div className="input-space dia">
                <label htmlFor="Dia">Dia</label>
                <input
                  type="number"
                  id="Dia"
                  name="dia"
                  placeholder="DD"
                  required
                />
              </div>

              <div className="input-space mes">
                <label htmlFor="Mês">Mês</label>
                <div className="month-select">
                  <select name="meses" id="mes">
                    <option value="" disabled defaultValue>
                      Mês
                    </option>
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
                  <img src={monthSelector} alt="Seletor" />
                </div>
              </div>

              <div className="input-space ano">
                <label htmlFor="Ano">Ano</label>
                <input
                  type="number"
                  id="Ano"
                  name="ano"
                  placeholder="AAAA"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-space">
            <label htmlFor="gender">Qual o seu gênero?</label>
            <div className="input-gender">
              <div>
                <input
                  type="radio"
                  id="Masculino"
                  name="gender"
                  value="Masculino"
                />
                <label htmlFor="Masculino">Masculino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Feminino"
                  name="gender"
                  value="Feminino"
                />
                <label htmlFor="Feminino">Feminino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Não Binário"
                  name="gender"
                  value="Não Binário"
                />
                <label htmlFor="Não Binário">Não Binário</label>
              </div>
              <div>
                <input type="radio" id="Outros" name="gender" value="Outros" />
                <label htmlFor="Outros">Outros</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Prefiro não dizer"
                  name="gender"
                  value="Prefiro não dizer"
                />
                <label htmlFor="Prefiro não dizer">Prefiro não dizer</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div>
              <input type="checkbox" id="marketing" name="marketing" />
              <label htmlFor="marketing">
                Não quero receber mensagens de marketing do Spotify
              </label>
            </div>
            <div>
              <input type="checkbox" id="dados" name="dados" />
              <label htmlFor="dados">
                Compartilhar meus dados cadastrais com os provedores de conteúdo
                do Spotify para fins de marketing.
              </label>
            </div>
            <div>
              <input type="checkbox" id="termos" name="termos" />
              <label htmlFor="termos">
                Eu concordo com os
                <Link to="">Termos e Condições de Uso do Spotify.</Link>
              </label>
            </div>
          </div>

          <div className="priv-policy">
            <p>
              Para saber mais sobre como o Spotify coleta, utiliza, compartilha
              e protege seus dados pessoais, leia a
              <Link to="">Política de privacidade do Spotify.</Link>
            </p>
          </div>

          <div className="submit-button">
            <input type="submit" value="Inscrever-se" />
          </div>

          <div className="form-group login">
            <p>
              Já tem uma conta? <Link to="/login">Faça login.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
