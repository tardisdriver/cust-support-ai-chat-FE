import Main from '../components/main';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const customerFound = state.customerFound;
    return {
        customerFound
    }
}


export default connect(mapStateToProps)(Main);