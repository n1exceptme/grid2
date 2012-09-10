Ext.define(
'AM.view.MapView',
	{
		extend: 'Ext.grid.Panel',
		store: 'mapStore',
		alias: 'widget.mapview',
		title: 'All Users',
		
		initComponent: function()
		{
			this.columns = [ 
		           		{header: 'N.', dataIndex: 'N.', flex: 1},
		                {header: 'Conto contrattuale', dataIndex: 'Conto contrattuale', flex: 1},
		                {header: 'Impianto di vendita', dataIndex: 'Impianto di vendita', flex: 1},
		                {header: 'Particella', dataIndex: 'Particella', flex: 1},
		                {header: 'Indirizzo di fornitura', dataIndex: 'Indirizzo di fornitura', flex: 1},
		                {header: 'Nr', dataIndex: 'Nr', flex: 1},
		                {header: 'Comune', dataIndex: 'Comune', flex: 1},
		                {header: 'Prov', dataIndex: 'Prov', flex: 1},
		                {header: 'Dist.', dataIndex: 'Dist.', flex: 1},
		                {header: 'Pod', dataIndex: 'Pod', flex: 1},
		                {header: 'Enel Tel', dataIndex: 'Enel Tel', flex: 1},
		                {header: 'Tipo app.', dataIndex: 'Tipo app.', flex: 1},
		                {header: 'Potenza disp.', dataIndex: 'Potenza disp.', flex: 1},
		                {header: 'Tensione', dataIndex: 'Tensione', flex: 1},
		                {header: 'Opzione trasp.', dataIndex: 'Opzione trasp.', flex: 1},
		                {header: 'Consumi KWh x rinnovo', dataIndex: 'Consumi KWh x rinnovo', flex: 1},
		                {header: 'Inizio fornitura a libero mercato', dataIndex: 'Inizio fornitura a libero mercato', flex: 1}
		                ];
			
			this.callParent(arguments);		
		}
	}
);