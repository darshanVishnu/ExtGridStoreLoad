Ext.application({
    name: 'QuickStart',

    
  
  launch: function () {
 //     Implement this method to do a custom launch.


 
 Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [ 'firstName', 'lastName', 'officeLocation' ,'phoneNumber']
});

var userStore = Ext.create('Ext.data.Store', {
    model: 'User',
     data: [
         {"firstName":"Jean","lastName":"Grey","officeLocation":"Lawrence, KS","phoneNumber":"(372) 792-6728"},
          {"firstName":"Jean","lastName":"Grey","officeLocation":"Lawrence, KS","phoneNumber":"(372) 792-6728"},
          {"firstName":"Jean","lastName":"Grey","officeLocation":"Lawrence, KS","phoneNumber":"(372) 792-6728"},
    {"firstName":"Jean","lastName":"Grey","officeLocation":"Lawrence, KS","phoneNumber":"(372) 792-6728"},
    ]
  
     // proxy: {
         // type: 'ajax',
         // url: 'http://localhost:8080/ms/om/api/datajson',
         // reader: {
             // type: 'json',
             
         // }
     // },
     // autoLoad: true
});

Ext.create('Ext.grid.Panel', {
    renderTo: Ext.getBody(),
    store: userStore,
    storeId: 'mystore',
    width: 400,
    height: 200,
    title: 'Application Users',
    columns: [
        {
            text: 'Name',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'firstName'
        },
        {
            text: ' lastName',
            width: 150,
            dataIndex: 'lastName',
            hidden: true
        },
        {
            text: 'Phone Number',
            flex: 1,
            dataIndex: 'phoneNumber'
        },{
            text: 'Phone officeLocation',
            flex: 1,
            dataIndex: 'officeLocation'
        }
    ]
});

var task = {
   run: function() {
        userStore.load()
   },
   interval: 5000 //5 seconds
}

var runner = new Ext.util.TaskRunner();

runner.start(task);
    }


});
