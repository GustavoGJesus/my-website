import Link from 'next/link';

import styles from './card.module.css';

export function Card() {
  return (
    <div className={styles.container}>
      <Link href="https://www.linkedin.com/in/gustavojgomes/">
        <div className={styles.content}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTYsMjRINDBBMTYsMTYsMCwwLDAsMjQsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMTYsMjRabTAsMTkySDQwVjQwSDIxNlYyMTZaTTk2LDExMnY2NGE4LDgsMCwwLDEtMTYsMFYxMTJhOCw4LDAsMCwxLDE2LDBabTg4LDI4djM2YTgsOCwwLDAsMS0xNiwwVjE0MGEyMCwyMCwwLDAsMC00MCwwdjM2YTgsOCwwLDAsMS0xNiwwVjExMmE4LDgsMCwwLDEsMTUuNzktMS43OEEzNiwzNiwwLDAsMSwxODQsMTQwWk0xMDAsODRBMTIsMTIsMCwxLDEsODgsNzIsMTIsMTIsMCwwLDEsMTAwLDg0WiI+PC9wYXRoPjwvc3ZnPg=="
            color="#6443ba"
          />
          <h3>Linkedin</h3>
        </div>
      </Link>
      <Link href="https://github.com/GustavoGJesus">
        <div className={styles.content}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMDguMzEsNzUuNjhBNTkuNzgsNTkuNzgsMCwwLDAsMjAyLjkzLDI4LDgsOCwwLDAsMCwxOTYsMjRhNTkuNzUsNTkuNzUsMCwwLDAtNDgsMjRIMTI0QTU5Ljc1LDU5Ljc1LDAsMCwwLDc2LDI0YTgsOCwwLDAsMC02LjkzLDQsNTkuNzgsNTkuNzgsMCwwLDAtNS4zOCw0Ny42OEE1OC4xNCw1OC4xNCwwLDAsMCw1NiwxMDR2OGE1Ni4wNiw1Ni4wNiwwLDAsMCw0OC40NCw1NS40N0EzOS44LDM5LjgsMCwwLDAsOTYsMTkydjhINzJhMjQsMjQsMCwwLDEtMjQtMjRBNDAsNDAsMCwwLDAsOCwxMzZhOCw4LDAsMCwwLDAsMTYsMjQsMjQsMCwwLDEsMjQsMjQsNDAsNDAsMCwwLDAsNDAsNDBIOTZ2MTZhOCw4LDAsMCwwLDE2LDBWMTkyYTI0LDI0LDAsMCwxLDQ4LDB2NDBhOCw4LDAsMCwwLDE2LDBWMTkyYTM5LjgsMzkuOCwwLDAsMC04LjQ0LTI0LjUzQTU2LjA2LDU2LjA2LDAsMCwwLDIxNiwxMTJ2LThBNTguMTQsNTguMTQsMCwwLDAsMjA4LjMxLDc1LjY4Wk0yMDAsMTEyYTQwLDQwLDAsMCwxLTQwLDQwSDExMmE0MCw0MCwwLDAsMS00MC00MHYtOGE0MS43NCw0MS43NCwwLDAsMSw2LjktMjIuNDhBOCw4LDAsMCwwLDgwLDczLjgzYTQzLjgxLDQzLjgxLDAsMCwxLC43OS0zMy41OCw0My44OCw0My44OCwwLDAsMSwzMi4zMiwyMC4wNkE4LDgsMCwwLDAsMTE5LjgyLDY0aDMyLjM1YTgsOCwwLDAsMCw2Ljc0LTMuNjksNDMuODcsNDMuODcsMCwwLDEsMzIuMzItMjAuMDZBNDMuODEsNDMuODEsMCwwLDEsMTkyLDczLjgzYTguMDksOC4wOSwwLDAsMCwxLDcuNjVBNDEuNzIsNDEuNzIsMCwwLDEsMjAwLDEwNFoiPjwvcGF0aD48L3N2Zz4="
            color="#6443ba"
          />
          <h3>Github</h3>
        </div>
      </Link>
      <Link href="https://dev.to/gj_developer">
        <div className={styles.content}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMzIsNTZIMjRBMTYsMTYsMCwwLDAsOCw3MlYxODRhMTYsMTYsMCwwLDAsMTYsMTZIMjMyYTE2LDE2LDAsMCwwLDE2LTE2VjcyQTE2LDE2LDAsMCwwLDIzMiw1NlptMCwxMjhIMjRWNzJIMjMyVjE4NFpNMTI4LDEwNHYxNmg4YTgsOCwwLDAsMSwwLDE2aC04djE2aDE2YTgsOCwwLDAsMSwwLDE2SDEyMGE4LDgsMCwwLDEtOC04Vjk2YTgsOCwwLDAsMSw4LThoMjRhOCw4LDAsMCwxLDAsMTZabTg3LjctNS44My0xOCw2NGE4LDgsMCwwLDEtMTUuNCwwbC0xOC02NGE4LDgsMCwwLDEsMTUuNC00LjM0TDE5MCwxMzAuNDVsMTAuMy0zNi42MmE4LDgsMCwxLDEsMTUuNCw0LjM0Wk02NCw4OEg1NmE4LDgsMCwwLDAtOCw4djY0YTgsOCwwLDAsMCw4LDhoOGEzMiwzMiwwLDAsMCwzMi0zMlYxMjBBMzIsMzIsMCwwLDAsNjQsODhabTE2LDQ4YTE2LDE2LDAsMCwxLTE2LDE2VjEwNGExNiwxNiwwLDAsMSwxNiwxNloiPjwvcGF0aD48L3N2Zz4="
            color="#6443ba"
          />
          <h3>DEV.to</h3>
        </div>
      </Link>
    </div>
  );
}
