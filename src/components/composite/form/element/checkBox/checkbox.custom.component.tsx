import "./checkbox-custom.scss";

export default function CheckBoxComponent({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  return (
    <div className="custom-checkbox">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} />
    </div>
  );
}
