Ext.define(
'AM.view.MapView',
	{
		extend: 'Ext.grid.Panel',
		plugins: [
			Ext.create('Ext.grid.plugin.RowEditing', {
				clicksToEdit: 2,
				autoCancel: false
			})
		],		
		collapsible: true,
        animCollapse: false,
		store: 'mapStore',
		alias: 'widget.mapview',
		title: 'Anagrafica Forniture',
		
		bbar: Ext.create('Ext.PagingToolbar', {
		            //store: 'mapStore',
		            displayInfo: true,
		            displayMsg: 'Displaying topics {0} - {1} of {2}',
		            emptyMsg: "No topics to display"
		}),	

        columnLines: true,
        width: 20000,
        frame: true,
        viewConfig: {
            stripeRows: true
        },        
		
		
		initComponent: function()
		{
			this.items = [
							{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'center'
				},
            items: [
				{
                minWidth: 80,
                text: 'Save'
				},
				{
                minWidth: 80,
                text: 'Cancel'
				}
				]
			}, 
			{
            xtype: 'toolbar',
            items: [
				{
                text:'Add Something',
                tooltip:'Add a new row',
                iconCls:'add'
				}, 
				'-', 
				{
                text:'Options',
                tooltip:'Set options',
                iconCls:'option'
				},
				'-',
				{
                itemId: 'removeButton',
                text:'Remove Something',
                tooltip:'Remove the selected item',
                iconCls:'remove',
                disabled: true
				}
				]
			}
			
						
			];
			
			
			
			this.columns = [
						
						Ext.create('Ext.grid.RowNumberer'),
		                {header: 'Pod', sortable : true, dataIndex: 'Pod', editor: 'textfield', editor: 'textfield', flex:1, width:200},			
		           		{header: 'N.', sortable : true,dataIndex: 'N', editor: 'textfield', flex:1},
		                {header: 'Conto contrattuale', sortable : true,dataIndex: 'Conto_contrattuale', editor: 'textfield', flex:1},
		                {header: 'Impianto di vendita', sortable : true,dataIndex: 'Impianto_vendita', editor: 'textfield', flex:1},
		                
						{
						header: 'Particella', sortable : true,dataIndex: 'Particella', editor: 'textfield', flex:1
						}, 
						{
						header: 'Indirizzo di fornitura', sortable : true,dataIndex: 'Indirizzo_fornitura', editor: 'textfield', flex:1
						},
						{
						header: 'Comune', sortable : true,dataIndex: 'Comune', editor: 'textfield', flex:1
						},
						{
						header: 'Prov', sortable : true,dataIndex: 'Prov', editor: 'textfield', flex:1
						},
						
		                
		                
		                {header: 'Nr', sortable : true,dataIndex: 'Nr', editor: 'textfield', flex:1},

		                {header: 'Distributore', sortable : true,dataIndex: 'Dist', editor: 'textfield', flex:1},
		                {header: 'Codice Cliente', sortable : true,dataIndex: 'Enel_Tel', editor: 'textfield', flex:1},
		                {header: 'Tipo_app', sortable : true,dataIndex: 'Tipo_app', editor: 'textfield', flex:1},
		                {header: 'Potenza disponibile', sortable : true,dataIndex: 'Potenza_disp', editor: 'textfield', flex:1},
		                {header: 'Tensione', sortable : true,dataIndex: 'Tensione', editor: 'textfield', flex:1},
		                {header: 'Opzione di trasport', sortable : true,dataIndex: 'Opzione_trasp', editor: 'textfield', flex:1},
		                {header: 'Consumi (KWh)', sortable : true,dataIndex: 'Consumi_KWh', editor: 'textfield', flex:1},
		                {header: 'Inizio fornitura mercato libero', sortable : true,dataIndex: 'Inizio_fornitura', editor: 'textfield', flex:1}
		                
		                ];
			
			this.callParent(arguments);		
		}
	}
);	