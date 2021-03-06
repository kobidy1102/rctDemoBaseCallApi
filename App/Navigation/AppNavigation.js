import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/Launch/Launch.Screen'
import MainScreen from '../Containers/Main/Main.Screen'
import DemoScreen from '../Containers/Demo/Demo.Screen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainScreen: {screen: MainScreen},
  DemoScreen: {screen: DemoScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
    gesturesEnabled: false,
  }
})

export default PrimaryNav
