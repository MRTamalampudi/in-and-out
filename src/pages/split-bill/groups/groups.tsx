import styles from "./groups.module.scss"
import GroupsTable from "pages/split-bill/groups/groups-table/groups-table";

type GroupsProps = {

}
const Groups = ({}:GroupsProps) => {
  return (
      <div className={styles.Groups}>
          <GroupsTable/>
      </div>
  )
}

export default Groups;