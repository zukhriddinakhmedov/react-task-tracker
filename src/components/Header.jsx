import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" />
        </header>
    )
}
// CSS IN JSX
// const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black,'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
