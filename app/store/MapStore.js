/*
 * api: http://docs.sencha.com/ext-js/4-0/#!/api/Ext.data.proxy.Server-cfg-api
 */
 
var itemsPerPage = 30;   // set the number of items you want per page 
 
var store = Ext.define(
'AM.store.MapStore',
{
	extend: 'Ext.data.Store',
	model: 'AM.model.MapModel',
	storeId: 'mapStore',
	
	remoteGroup: true,
    pageSize: 30,	
    autoLoad: {start: 0, limit: 30},
    proxy:{ 
    		type: 'rest',
    		url: 'php/rest.php',
    		afterRequest:function( request, success )
    		{
    			console.log( 'request ' + request );
    			console.log( 'success '  + success );
    		}
    			
    }
});