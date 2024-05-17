import teamTab from "../data/teamData";
import logoGithub from "../assets/images/github.svg";

function Footer() {
  return (
    <footer>
      {teamTab.map((person) => (
        <section key={person.name} className={person.firstName}>
          <ul className="footerUl">
            <li>{person.name}</li>
            <li>{person.firstName}</li>
            <li>
              <a href={person.gitHub} className="hrefGithub">
                <img
                  className="logoGithub"
                  src={logoGithub}
                  alt="logo github"
                />
              </a>
            </li>
          </ul>
        </section>
      ))}
    </footer>
  );
}

export default Footer;
