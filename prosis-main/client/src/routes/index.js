import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Start from '../views/Start';
import Main from '../views/Main';

const StackNavigator = createStackNavigator({
    Start,
    Main,
});

export default createAppContainer(StackNavigator);
