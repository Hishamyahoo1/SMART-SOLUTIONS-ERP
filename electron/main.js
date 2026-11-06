const {app,BrowserWindow,Menu}=require('electron');
const path=require('path');
function create(){
  const w=new BrowserWindow({width:1280,height:850,autoHideMenuBar:true,webPreferences:{contextIsolation:true}});
  w.loadFile(path.join(__dirname,'..','www','index.html'));
}
app.whenReady().then(()=>{Menu.setApplicationMenu(null);create();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)create()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
