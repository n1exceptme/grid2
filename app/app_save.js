Ext.Loader.setConfig({enabled:true});

Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.toolbar.Paging',
    'Ext.selection.CheckboxModel'
]);

Ext.application( {
	name:"AM", appFolder:"app", 
	launch: function(){
		
		/**
		 * Controllers have no reference of the Store,
		 * but instead the store is instantiated after they are defined.
		 */		
		Ext.create('AM.store.MapStore');
		
    
    

		
		Ext.create( 'Ext.container.Viewport', { 
			
			width: 900,
			height: 600,
			
			items:[ { 
					xtype:"mapview",
					width: 800,
					height: 600
					}
				] 
			} 
		);		
		
	}
,
requires: ['AM.model.MapModel', 'AM.model.RemoteConfig' ],
controllers: ['MapController', 'MapCreateController']
});