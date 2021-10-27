import { useState, useCallback } from 'react';

const useApplyInputs = initialForm => {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  return [form, setForm, onChange];
};

export default useApplyInputs;
