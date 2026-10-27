/* BESTIE — elenco foto.
   Per aggiungere una foto: metti il file in /img e aggiungi una riga qui.
   sec: 'wildlife' | 'landscape' | 'reportage'
   group (solo wildlife): 'birds' | 'mammals'
   bw: true se la foto è in bianco e nero
   La prima foto di ogni sezione è quella in evidenza (la più recente).
   taken: anno-mese dello scatto, serve solo per l'ordinamento (non viene mostrato). */
window.PHOTOS = [
  { sec: 'wildlife', taken: '2024-05', file: 'red-fox-hail-abruzzo.jpg', w: 1629, h: 2000, title: 'Fox after the hail', group: 'mammals', bw: true, place: 'Abruzzo', alt: 'Wet red fox looking at the camera on ground covered in hail, black and white' },
  { sec: 'wildlife', taken: '2024-05', file: 'magpie-road-sign-salento-coast.jpg', w: 1673, h: 2000, title: 'Magpie on the bend', group: 'birds', bw: true, place: 'Salento coast', alt: 'Magpie perched on a pair of chevron road signs in silhouette against the sea and a streaked sky, black and white' },
  { sec: 'wildlife', taken: '2024-05', file: 'red-fox-slope-abruzzo.jpg', w: 2000, h: 1333, title: 'Fox on the slope', group: 'mammals', bw: false, place: 'Abruzzo', alt: 'Small red fox looking back from a steep rocky mountain meadow with a dark forested valley behind' },
  { sec: 'wildlife', taken: '2024-05', file: 'red-deer-grazing-abruzzo.jpg', w: 2000, h: 1519, title: 'Grazing at dusk', group: 'mammals', bw: true, place: 'Abruzzo', alt: 'Red deer hind walking and grazing in a dark woodland clearing, black and white' },
  { sec: 'wildlife', taken: '2024-05', file: 'red-deer-hind-abruzzo.jpg', w: 1494, h: 2000, title: 'Hind, looking back', group: 'mammals', bw: true, place: 'Abruzzo', alt: 'Portrait of a red deer hind with backlit ears looking straight at the camera beside a leafy bush, black and white' },
  { sec: 'wildlife', taken: '2024-01', file: 'kestrel-salento.jpg', w: 1644, h: 2000, title: 'Kestrel, blue hour', group: 'birds', bw: false, place: 'Salento', alt: 'Common kestrel perched on bare branches against a deep blue evening sky' },
  { sec: 'wildlife', taken: '2024-01', file: 'stonechat-salento.jpg', w: 1299, h: 2000, title: 'Stonechat on a thin line', group: 'birds', bw: false, place: 'Salento', alt: 'Male European stonechat perched on a thin dry stem against a soft green and brown background' },
  { sec: 'landscape', taken: '2024-05', file: 'hill-village-wind-turbines-abruzzo.jpg', w: 2000, h: 1065, title: 'The village and the turbines', bw: false, place: 'Abruzzo', alt: 'Hilltop stone village on a cliff with wind turbines on the ridge behind under heavy clouds' },
  { sec: 'landscape', taken: '2024-05', file: 'flooded-woods-abruzzo.jpg', w: 2000, h: 1333, title: 'Flooded woods', bw: true, place: 'Abruzzo', alt: 'Tree trunks standing in floodwater with bright foliage behind and long reflections on the surface, black and white' },
  { sec: 'landscape', taken: '2024-05', file: 'valley-village-light-abruzzo.jpg', w: 2000, h: 978, title: 'A spot of light', bw: true, place: 'Abruzzo', alt: 'Sunlit village in a dark mountain valley beneath a big forested peak and heavy clouds, black and white' },
  { sec: 'landscape', taken: '2024-05', file: 'mountain-village-fog-abruzzo.jpg', w: 2000, h: 948, title: 'Village in the cloud', bw: true, place: 'Abruzzo', alt: 'Hillside stone village beneath a mountain wrapped in low cloud, black and white' },
  { sec: 'landscape', taken: '2024-04', file: 'olive-tree-wind-turbine-salento.jpg', w: 2000, h: 1385, title: 'Old olive, new wind', bw: true, place: 'Salento', alt: 'A dead ancient olive tree behind a dry stone wall next to a wind turbine, black and white' },
  { sec: 'reportage', taken: '2023-11', file: 'fisherman-net-salento-coast.jpg', w: 2000, h: 1125, title: 'The net, before the cast', bw: false, place: 'Salento coast', alt: 'Fisherman in waders standing in the shallow sea holding a green net under a pastel sky' }
];
