import teamTab from "../data/teamData";

function Footer() {
  return (
    <footer>
      {teamTab.map((person) => (
        <section key={person.name} className={person.firstName}>
          <ul>
            <li>{person.name}</li>
            <li>{person.firstName}</li>
            <li>{person.gitHub}</li>
          </ul>
        </section>
      ))}
    </footer>
  );
}

export default Footer;
