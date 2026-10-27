/* BESTIE — elenco foto.
   Per aggiungere una foto: metti il file in /img e aggiungi una riga qui.
   sec: 'wildlife' | 'landscape' | 'reportage'
   group (solo wildlife): 'birds' | 'mammals'
   bw: true se la foto è in bianco e nero
   La prima foto di ogni sezione è quella in evidenza (la più recente).
   taken: anno-mese dello scatto, serve solo per l'ordinamento (non viene mostrato). */
window.PHOTOS = [
  { sec: 'wildlife', taken: '2024-05', file: 'red-fox-hail-abruzzo.jpg', w: 1629, h: 2000, title: 'Fox after the hail', group: 'mammals', bw: true, place: 'Abruzzo', alt: 'Wet red fox looking at the camera on ground covered in hail, black and white' },
  { sec: 'wildlife', taken: '2024-01', file: 'kestrel-salento.jpg', w: 1644, h: 2000, title: 'Kestrel, blue hour', group: 'birds', bw: false, place: 'Salento', alt: 'Common kestrel perched on bare branches against a deep blue evening sky' },
  { sec: 'wildlife', taken: '2024-01', file: 'stonechat-salento.jpg', w: 1299, h: 2000, title: 'Stonechat on a thin line', group: 'birds', bw: false, place: 'Salento', alt: 'Male European stonechat perched on a thin dry stem against a soft green and brown background' },
  { sec: 'landscape', taken: '2024-05', file: 'hill-village-wind-turbines-abruzzo.jpg', w: 2000, h: 1065, title: 'The village and the turbines', bw: false, place: 'Abruzzo', alt: 'Hilltop stone village on a cliff with wind turbines on the ridge behind under heavy clouds' },
  { sec: 'landscape', taken: '2024-04', file: 'olive-tree-wind-turbine-salento.jpg', w: 2000, h: 1385, title: 'Old olive, new wind', bw: true, place: 'Salento', alt: 'A dead ancient olive tree behind a dry stone wall next to a wind turbine, black and white' },
  { sec: 'reportage', taken: '2023-11', file: 'fisherman-net-salento-coast.jpg', w: 2000, h: 1125, title: 'The net, before the cast', bw: false, place: 'Salento coast', alt: 'Fisherman in waders standing in the shallow sea holding a green net under a pastel sky' }
];
