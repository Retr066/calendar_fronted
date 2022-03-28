import { useField, useFormikContext } from "formik";
import DateTimePicker from "react-datetime-picker";

export const DatePicker = ({ ...props }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DateTimePicker
      {...props}
      value={field.value}
      onChange={(value) => setFieldValue(field.name, value)}
      format="y-MM-dd h:mm:ss a"
      amPmAriaLabel="Select AM/PM"
    />
  );
};
