function IntField({value, onChange}: {
    value: number;
    onChange: (value: number) => void;
}) {
    return <div>
        <button onClick={() => onChange(value - 1)}>-</button>
        <input value={value} onChange={event => onChange(parseInt(event.target.value))} />
        <button onClick={() => onChange(value - 1)}>+</button>
    </div>
}

export default IntField;
