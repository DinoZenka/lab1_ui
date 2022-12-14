export const styles = {
    container: {
        minWidth: 200,
        border: '1px solid grey',
        borderRadius: '20px',
        padding: '25px 10px 10px 10px',
        display: 'inline-block',
        margin: '10px',
        position: 'relative',
        '&:hover > button': {
            opacity: 1,
            transition: 'opacity .5s',
        }
    },
    button: {
        position: 'absolute',
        opacity: 0,
        top: 0,
        minWidth: 0,
        borderRadius: '50%',
        transition: 'opacity .5s'
    },
    editButton: {
        right: 30,
    },
    deleteButton: {
        right: 0,
    },
    creationDate: {
        position: 'absolute',
        color: 'grey',
        fontSize: 10,
        bottom: 5,
        right: 15,
    }
}
