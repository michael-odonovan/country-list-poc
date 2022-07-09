interface Fields {
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  defaultValue?: string;
}

export const fields: Fields[] = [
  {
    label: "first name",
    name: "firstName",
    type: "text",
    defaultValue: "Talula",
  },
  {
    label: "second name",
    name: "secondName",
    type: "text",
    defaultValue: "Hula",
  },
  {
    label: "email",
    name: "email",
    type: "email",
  },
  {
    label: "address line 1",
    name: "addressLine1",
    type: "text",
    defaultValue: "10 Downing Street",
  },
  {
    label: "address line 2",
    name: "addressLine2",
    type: "text",
  },
]
