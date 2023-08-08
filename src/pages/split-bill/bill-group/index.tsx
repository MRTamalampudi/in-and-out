import React, { FC } from 'react';
import styles from './bill-group.module.scss';
import GroupBillHeader from "pages/split-bill/group-bill-header";
import Table from "components/table";

interface BillGroupProps {}

const BillGroup: FC<BillGroupProps> = () => (
  <div className={styles.BillGroup}>
      <div className={styles.header}>
          <GroupBillHeader/>
      </div>
      <div className={styles.body}>
          <Table
              title={"Transactions"}
              entries={true}
              rounded={false}
              borders={false}
          >
          <thead>
          <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
          </tr>
          <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
          </tr>
          <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
          </tr>
          <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
          </tr>
          <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
          </tr>
          <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
          </tr>
          <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
          </tr>
          <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
          </tr>
          <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
          </tr>
          <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
          </tr>
          </tbody>
      </Table>
      </div>
  </div>
);

export default BillGroup;
