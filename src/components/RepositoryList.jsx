import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.css';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/carolbarbosa101'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Lista de repositórios</h1>

      <ul>
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}