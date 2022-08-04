import React, { useMemo, useState } from "react";
import { FormGroupWithAdding } from "../components/FormGroup/FormGroup";

export default function useFormGroup(label) {
  const [formGroup, setFormGroup] = useState(1);
  const formContent = useMemo(() => {
    let content = [];
    for (let i = 0; i < formGroup; i += 1) {
      content = [
        ...content,
        <FormGroupWithAdding
          key={i}
          ariaLabel={label}
          title={label}
          onClickAdd={() => setFormGroup(formGroup + 1)}
          onClickRemove={() => setFormGroup(formGroup - 1)}
          lastOne={formGroup === 1}
        />,
      ];
    }
    return content;
  }, [formGroup]);
  return { formContent };
}
