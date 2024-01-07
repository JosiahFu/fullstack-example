function StringField({value, onChange}: {
    value: string;
    onChange: (value: string) => void;
}) {
    return <div>
        <input value={value} onChange={event => onChange(event.target.value)} />
    </div>
}

export default StringField;
