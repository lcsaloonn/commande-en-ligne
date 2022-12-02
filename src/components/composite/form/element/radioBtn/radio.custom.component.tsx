import "./radio-custom.scss";
export default function RadioButtonComponent({
  id,
  family,
  label,
}: {
  id: string;
  family: string;
  label: string;
}) {
  return (
    <div className="custom-radio">
      <input type="radio" name={family} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
