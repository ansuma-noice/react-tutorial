import PropTypes from 'prop-types'

export default function Comp({name,age}){
    return `In 5 yrs ${name} will b ${age+5}`
}

Comp.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}  