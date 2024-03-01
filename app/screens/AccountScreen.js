import { FlatList, StyleSheet, View } from 'react-native';
import useAuth from '../auth/useAuth';
import AppIcon from '../components/AppIcon';
import Screen from '../components/Screen';
import { ListItem, ListItemSeparator } from '../components/lists';
import defaultStyles from '../config/styles';
import routes from '../navigation/routes';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: defaultStyles.colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: defaultStyles.colors.secondary
    },
    targerScreen: routes.MESSAGES
  }
];

export default function AccountScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          key={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targerScreen)}
              showChevrons
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={
          <AppIcon
            name="logout"
            backgroundColor={defaultStyles.colors.warning}
          />
        }
        onPress={() => logout()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: defaultStyles.colors.light
  }
});
