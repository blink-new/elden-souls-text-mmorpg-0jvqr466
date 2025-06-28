import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import CharacterCard from '../components/CharacterCard';
import StatBar from '../components/StatBar';
import MenuButton from '../components/MenuButton';
import SubMenuButton from '../components/SubMenuButton';
import Footer from '../components/Footer';
import { Flame, Users, Key, Book, Briefcase, Hammer, Settings, User, Globe } from 'lucide-react-native';

const App = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1518065330214-7781034d5f8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>THE SHATTERED REALMS</Text>
          <CharacterCard />
          <View style={styles.statsContainer}>
            <StatBar label="HP" value={450} maxValue={450} color="#ff0000" />
            <StatBar label="MP" value={320} maxValue={320} color="#0000ff" />
            <StatBar label="SP" value={180} maxValue={180} color="#00ff00" />
          </View>
          <View style={styles.menuContainer}>
            <MenuButton text="CHARACTER" icon={<User color="gold" />}>
              <SubMenuButton text="Stats & Attributes" onPress={() => router.push('/character/stats-attributes')} />
              <SubMenuButton text="Equipment & Armours" onPress={() => router.push('/character/equipment-armours')} />
              <SubMenuButton text="Skills & Incantations" onPress={() => router.push('/character/skills-incantations')} />
              <SubMenuButton text="Inventory" onPress={() => router.push('/character/inventory')} />
              <SubMenuButton text="Status Effects" onPress={() => router.push('/character/status-effects')} />
              <SubMenuButton text="Leveling & Progression" onPress={() => router.push('/character/leveling-progression')} />
              <SubMenuButton text="Class & Specializations" onPress={() => router.push('/character/class-specializations')} />
              <SubMenuButton text="Race & Bloodlines" onPress={() => router.push('/character/race-bloodlines')} />
              <SubMenuButton text="Subclass" onPress={() => router.push('/character/subclass')} />
              <SubMenuButton text="Appearance" onPress={() => router.push('/character/appearance')} />
              <SubMenuButton text="Loadouts" onPress={() => router.push('/character/loadouts')} />
            </MenuButton>
            <MenuButton text="WORLD" icon={<Globe color="gold" />}>
              <SubMenuButton text="World Map" onPress={() => router.push('/world/world-map')} />
              <SubMenuButton text="Locations" onPress={() => router.push('/world/locations')} />
              <SubMenuButton text="Fast Travel" onPress={() => router.push('/world/fast-travel')} />
              <SubMenuButton text="NPCs" onPress={() => router.push('/world/npcs')} />
              <SubMenuButton text="Lore & History" onPress={() => router.push('/world/lore-history')} />
              <SubMenuButton text="Exploration" onPress={() => router.push('/world/exploration')} />
              <SubMenuButton text="Landmarks" onPress={() => router.push('/world/landmarks')} />
            </MenuButton>
            <MenuButton text="COMBAT" icon={<Flame color="gold" />}>
              <SubMenuButton text="Active Battles" onPress={() => router.push('/combat/active-battles')} />
              <SubMenuButton text="Battle Tactics" onPress={() => router.push('/combat/battle-tactics')} />
              <SubMenuButton text="Unit Formations" onPress={() => router.push('/combat/unit-formations')} />
              <SubMenuButton text="Commander Center" onPress={() => router.push('/combat/commander-center')} />
              <SubMenuButton text="Boss Strategies" onPress={() => router.push('/combat/boss-strategies')} />
              <SubMenuButton text="Recent Encounters" onPress={() => router.push('/combat/recent-encounters')} />
              <SubMenuButton text="Battles Rewards" onPress={() => router.push('/combat/battles-rewards')} />
              <SubMenuButton text="Difficulty Settings" onPress={() => router.push('/combat/difficulty-settings')} />
              <SubMenuButton text="Tactical Analysis" onPress={() => router.push('/combat/tactical-analysis')} />
              <SubMenuButton text="Combat Log" onPress={() => router.push('/combat/combat-log')} />
              <SubMenuButton text="PvE & PvM" onPress={() => router.push('/combat/pve-pvm')} />
            </MenuButton>
            <MenuButton text="MULTIPLAYER" icon={<Users color="gold" />}>
              <SubMenuButton text="Cooperative Play" onPress={() => router.push('/multiplayer/cooperative-play')} />
              <SubMenuButton text="PVP Invasions" onPress={() => router.push('/multiplayer/pvp-invasions')} />
              <SubMenuButton text="Player Messages" onPress={() => router.push('/multiplayer/player-messages')} />
              <SubMenuButton text="Summons Signs" onPress={() => router.push('/multiplayer/summons-signs')} />
              <SubMenuButton text="Guild & Clans" onPress={() => router.push('/multiplayer/guild-clans')} />
              <SubMenuButton text="Party Management" onPress={() => router.push('/multiplayer/party-management')} />
              <SubMenuButton text="Group Finder" onPress={() => router.push('/multiplayer/group-finder')} />
              <SubMenuButton text="PVP Rankings" onPress={() => router.push('/multiplayer/pvp-rankings')} />
              <SubMenuButton text="Social Interactions" onPress={() => router.push('/multiplayer/social-interactions')} />
              <SubMenuButton text="Friend List" onPress={() => router.push('/multiplayer/friend-list')} />
              <SubMenuButton text="Blocking & Ignoring" onPress={() => router.push('/multiplayer/blocking-ignoring')} />
            </MenuButton>
            <MenuButton text="DUNGEONS & RAIDS" icon={<Key color="gold" />}>
              <SubMenuButton text="Dungeon Finder" onPress={() => router.push('/dungeons/dungeon-finder')} />
              <SubMenuButton text="Raid Finder" onPress={() => router.push('/dungeons/raid-finder')} />
              <SubMenuButton text="Mythic Keystones" onPress={() => router.push('/dungeons/mythic-keystones')} />
              <SubMenuButton text="Lockouts" onPress={() => router.push('/dungeons/lockouts')} />
            </MenuButton>
            <MenuButton text="QUESTS" icon={<Book color="gold" />}>
              <SubMenuButton text="Quest Log" onPress={() => router.push('/quests/quest-log')} />
              <SubMenuButton text="World Quests" onPress={() => router.push('/quests/world-quests')} />
              <SubMenuButton text="Campaigns" onPress={() => router.push('/quests/campaigns')} />
            </MenuButton>
            <MenuButton text="ITEMS & EQUIPMENT" icon={<Briefcase color="gold" />}>
              <SubMenuButton text="Inventory Management" onPress={() => router.push('/items/inventory-management')} />
              <SubMenuButton text="Weapons" onPress={() => router.push('/items/weapons')} />
              <SubMenuButton text="Armor and Apparel" onPress={() => router.push('/items/armor-apparel')} />
              <SubMenuButton text="Consumables" onPress={() => router.push('/items/consumables')} />
              <SubMenuButton text="Materials" onPress={() => router.push('/items/materials')} />
              <SubMenuButton text="Item Rarity Guide" onPress={() => router.push('/items/item-rarity-guide')} />
              <SubMenuButton text="Equipment Slots" onPress={() => router.push('/items/equipment-slots')} />
              <SubMenuButton text="Set Bonuses" onPress={() => router.push('/items/set-bonuses')} />
            </MenuButton>
            <MenuButton text="CRAFTING" icon={<Hammer color="gold" />}>
              <SubMenuButton text="Professions" onPress={() => router.push('/crafting/professions')} />
              <SubMenuButton text="Recipes" onPress={() => router.push('/crafting/recipes')} />
              <SubMenuButton text="Crafting Orders" onPress={() => router.push('/crafting/crafting-orders')} />
            </MenuButton>
            <MenuButton text="GAME SETTINGS" icon={<Settings color="gold" />}>
              <SubMenuButton text="Gameplay" onPress={() => router.push('/settings/gameplay')} />
              <SubMenuButton text="Controls" onPress={() => router.push('/settings/controls')} />
              <SubMenuButton text="Audio" onPress={() => router.push('/settings/audio')} />
              <SubMenuButton text="Graphics" onPress={() => router.push('/settings/graphics')} />
              <SubMenuButton text="Account" onPress={() => router.push('/settings/account')} />
            </MenuButton>
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'serif',
  },
  statsContainer: {
    marginVertical: 20,
  },
  menuContainer: {
    marginVertical: 20,
  },
});

export default App;