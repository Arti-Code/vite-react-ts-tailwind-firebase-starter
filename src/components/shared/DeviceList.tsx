const devices = [
    { name: 'Tank', online: true, id: 1, class: 'btn btn-outline btn-success mt-1' },
    { name: 'QuadroPod', online: false, id: 2 , class: 'btn btn-outline btn-primary mt-1' },
    { name: 'Rover', online: false, id: 3 , class: 'btn btn-outline btn-warning mt-1' },
    { name: 'Camera', online: false, id: 4 , class: 'btn btn-outline btn-secondary mt-1' },
  ];
  let color_btn = "btn btn-outline btn-success mt-1";
  export default function DeviceList() {
    const listDevices = devices.map(device => 
/*             let color_btn = "btn-info";
            
            if (device.online) {
                color_btn = "btn btn-success";
            } else {
                color_btn = "btn btn-error";
            } */
            
            <div>
            <li key={device.id}>
                <button 
                    className={device.class}
                >
                    {device.name}
                </button>
            </li>
            </div>
    );
  
    return (
        <div className="grid grid-cols-1 gap-3">
            <ul>{listDevices}</ul>
        </div>
    );
  }