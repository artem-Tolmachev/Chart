import styles from './styles.module.css';

function CustomCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {

  return (
    <label className={styles.checkbox_container}>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  )
}

export default CustomCheckbox;