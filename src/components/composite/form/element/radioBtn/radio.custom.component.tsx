import "./radio-custom.scss";
export default function RadioButtonComponent({
  id,
  family,
  label,
  isChecked,
}: {
  id: string;
  family: string;
  label: string;
  isChecked?: boolean;
}) {
  return (
    <div className="custom-radio">
      <input type="radio" name={family} id={id} checked={isChecked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
