import { Create, SimpleForm, TextInput, NumberInput, List, Datagrid, TextField, DateField, BooleanField, NumberField, EditButton } from 'react-admin';
import uuid from 'react-uuid'

// const postDefaultValue = () => ({user: "John Doe", year: 2000, salary_income: 60000, salary_hours: 37})

export const declarationsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="name" />
            <NumberInput source="year" />
            <NumberInput source="salary_income" />
            <NumberInput source="salary_hours" />
        </SimpleForm>
    </Create>
);


export const declarationsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="email" />
            <TextField source="name" />
            <NumberField source="year" />
            <NumberField source="salary_income" />
            <NumberField source="salary_hours" />
            <EditButton />
        </Datagrid>
    </List>
);