import React, { useState } from 'react';
import { Button } from 'react-native';
import {Text, View, Image,} from 'react-native';

import DashboardScreenComponentStyle from '../components/DashboardScreen.component.style';
import styles from '../components/DashboardTestComponents';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    // <View style={DashboardScreenComponentStyle.container}>
    //   <View style={DashboardScreenComponentStyle.header}>
    //     {/* <Text style={DashboardScreenComponentStyle.headerText}>My Dashboard</Text> */}
    //   </View>
    //   <View style={DashboardScreenComponentStyle.nav}>
    //     <TouchableOpacity
    //       style={[DashboardScreenComponentStyle.navItem, activeTab === 'home' && DashboardScreenComponentStyle.activeNavItem]}
    //       onPress={() => handleTabPress('home')}>
    //       <Text style={DashboardScreenComponentStyle.navItemText}>Home</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={[DashboardScreenComponentStyle.navItem, activeTab === 'profile' && DashboardScreenComponentStyle.activeNavItem]}
    //       onPress={() => handleTabPress('profile')}>
    //       <Text style={DashboardScreenComponentStyle.navItemText}>Profile</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={[DashboardScreenComponentStyle.navItem, activeTab === 'enrollment' && DashboardScreenComponentStyle.activeNavItem]}
    //       onPress={() => handleTabPress('enrollment')}>
    //       <Text style={DashboardScreenComponentStyle.navItemText}>Enrollment</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={[DashboardScreenComponentStyle.navItem, activeTab === 'logout' && DashboardScreenComponentStyle.activeNavItem]}
    //       onPress={() => handleTabPress('logout')}>
    //       <Text style={DashboardScreenComponentStyle.navItemText}>Logout</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={DashboardScreenComponentStyle.content}>
    //     {activeTab === 'home' && ( // conditional rendering in javascript
    //       <View style={DashboardScreenComponentStyle.tabContent}>
    //         <Text>Home content goes here</Text>
    //       </View>
    //       )}
    //       {activeTab === 'profile' && (
    //         <View style={DashboardScreenComponentStyle.tabContent}>
    //           <Text>Profile content goes here</Text>
    //         </View>
    //     )}
    //     {activeTab === 'enrollment' && (
    //       <View style={DashboardScreenComponentStyle.tabContent}>
    //         <Text>Enrollment content goes here</Text>
    //       </View>
    //     )}
    //     {activeTab === 'logout' && (
    //       <View style={DashboardScreenComponentStyle.tabContent}>
    //         <Text>Logout content goes here</Text>
    //       </View>
    //     )}
    //   </View>
    // </View>

// mao ni akong gi edit

      
        
<View >
      <View
          style={{padding: 3, alignItems: 'center', backgroundColor: "pink", flexDirection: 'row', justifyContent: 'center', }}>
          <Image source={require('../assets/logo.png')}style={{ width: 50, height: 50,margin: 10  }}/>
          <Image source={require('../assets/uic.png')}style={{ width: 150, height: 50,margin: 10  }}/>
      </View>
<View>
      <Text style={{marginTop: 15, marginLeft: 35, fontWeight: 'bold',fontSize: 12}}>NOTIFCATIONS</Text>
      </View>
      <View style={{ marginLeft: 30, borderBottomWidth: .5, borderColor: 'black', marginVertical: 5,marginRight: 30, }}>
</View>

<View>
  <View 
  style={{borderWidth: 1, borderColor: '#C5C5C5', borderRadius: 10, marginLeft: 30,marginRight: 30,padding: 30,alignItems: 'center',
      backgroundColor: '#fff',flexDirection: 'row',justifyContent: 'center',}}>
      <Image source={require('../assets/bell.png')} 
      style={{width: 50,height: 50,margin: 10,marginRight: 275,marginBottom: 10,  }}/>
  </View>
<Text style={{marginTop: 15,marginLeft: 35, fontWeight: 'bold',fontSize: 12}}>QUICKLINKS</Text>

</View>
      <View style={{ marginLeft: 30, borderBottomWidth: .5,borderColor: 'black', marginVertical: 3, marginRight: 30, }}></View>

      <View style={{ flexDirection: 'row'}}>
      <Image source={require('../assets/gmail.png')}style={{ marginLeft: 30, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/journal.png')}style={{ marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/MIS.png')}style={{ marginLeft: 60, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/gclass.png')}style={{ marginLeft: 53, width: 40, height: 40,margin: 10  }}/>
      <Text style={{marginTop: 55, marginLeft: -360,fontSize: 10,}}>EMAIL</Text>
      <Text style={{marginTop: 55, marginLeft: 37,fontSize: 10,}}>Open journal system</Text>
      <Text style={{marginTop: 55, marginLeft: 21,fontSize: 10,}}>MIS support ticket</Text>
      <Text style={{marginTop: 55, marginLeft: 15,fontSize: 10,}}>Google classroom</Text>
      <Image source={require('../assets/HandbookUnder.png')}style={{ marginTop: 90, marginLeft: -280, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/HandbookGrad.png')}style={{ marginTop: 90, marginLeft: 100, width: 40, height: 40,margin: 10  }}/>
      <Text style={{marginTop: 135, marginLeft: -235,fontSize: 10,}}>Undergraduate Handbook</Text>
      <Text style={{marginTop: 135, marginLeft: 30,fontSize: 10,}}>Graduate School Handbook</Text>
      </View>


      <View style={{ marginLeft: 30, borderBottomWidth: .5,borderColor: 'black', marginVertical: 5, marginRight: 30, }}>
      
      <Text style={{marginTop: 15,marginLeft: 5, fontWeight: 'bold',fontSize: 12}}>EDUCATIONAL RESOURCES</Text></View> 
      <View style={{ flexDirection: 'row'}}>
      <Image source={require('../assets/destiny.jpg')}style={{ marginLeft: 33, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/EmeraldInsight.jpg')}style={{ marginLeft: 55, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/eric.jpg')}style={{ marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
      <Image source={require('../assets/info.jpg')}style={{ marginLeft: 50, width: 40, height: 40,margin: 10  }}/>
      <Text style={{marginTop: 50, marginLeft: -354,fontSize: 10,}}>DESTINY</Text>
      <Text style={{marginTop: 50, marginLeft: 35,fontSize: 10,}}>EMERALD INSIGHT</Text>
      <Text style={{marginTop: 50, marginLeft: 50,fontSize: 10,}}>ERIC</Text>
      <Text style={{marginTop: 50, marginLeft: 60,fontSize: 10,}}>INFOTRACK</Text>


      </View >

</View>





  );
};


export default Dashboard;