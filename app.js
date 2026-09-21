const stops = [
  {
    id: 0,
    kicker: "Punto de partida",
    title: "Minimercado Amancay · Alcaman y Ruta 23",
    short: "Prepará el recorrido",
    // Ubicación exacta compartida desde Google Maps.
    coords: [-39.2428951, -70.915708],
    image: "./assets/minimercado-amancay.webp",
    alt: "Frente de Minimercado Amancay, punto de inicio del recorrido",
    secondaryImage: "./assets/bienvenida-alumine.webp",
    secondaryAlt: "Cartel de bienvenida a Aluminé junto a la Ruta Provincial 23",
    noteHtml: "La experiencia comienza en <strong>Minimercado Amancay</strong>, donde el visitante puede retirar su autoguía y prepararse antes de comenzar el recorrido.<br><br>La propuesta está diseñada para realizarse de manera independiente y principalmente en vehículo, siguiendo la <strong>Ruta Provincial 23</strong>. A lo largo del camino, el río Aluminé será uno de los grandes protagonistas.<br><br><strong>Antes de salir:</strong> aprovechá este punto para abastecerte de lo necesario para el paseo y conocer algunos productos caseros.",
    direction: "Próxima parada: mirador sobre el río Aluminé."
  },
  {
    id: 1,
    kicker: "Primera parada",
    title: "Mirador y cartel ALUMINÉ",
    short: "Cartel, río y paisaje",
    coords: [-39.2406, -70.91265],
    image: "./assets/cartel-alumine.webp",
    alt: "Gran cartel de Aluminé acompañado por el paisaje",
    secondaryImage: "./assets/mirador-alumine.webp",
    secondaryAlt: "Mirador con vista panorámica al río Aluminé y los cerros",
    noteHtml: "Al continuar por la <strong>Ruta Provincial 23</strong>, llegamos a la primera parada del recorrido, donde nos recibe una de las imágenes más representativas de la localidad: el gran cartel de <strong>ALUMINÉ</strong>, acompañado por el río y el paisaje que lo rodea.<br><br>Desde el mirador se puede hacer una pausa para contemplar el curso del río Aluminé, su vegetación ribereña y los cerros que forman parte del entorno. Es un lugar ideal para disfrutar del paisaje y registrar el momento.<br><br><strong>📸 Momento para una foto:</strong> sacate una fotografía junto al cartel de ALUMINÉ y luego acercate al mirador para obtener una vista panorámica del río.<br><br><strong>Recomendación:</strong> estacioná únicamente en un lugar seguro, respetá la naturaleza y evitá dejar residuos.",
    direction: "Próxima parada: Puente Azul."
  },
  {
    id: 2,
    kicker: "Cruce del río",
    title: "Puente Azul",
    short: "Río, camino y comunidad",
    coords: [-39.23222, -70.91205],
    image: "./assets/puente-azul-historico.webp",
    alt: "Imagen histórica de la construcción del Puente Azul",
    secondaryImage: "./assets/registro-civil-rio.webp",
    secondaryAlt: "Sector del río Aluminé y antigua casa donde funcionó el Registro Civil",
    preserveSecondary: true,
    noteHtml: "La tercera parada nos lleva hasta el <strong>Puente Azul</strong>, uno de los puntos más característicos del recorrido. Fue construido entre <strong>1977 y 1979</strong> y, desde entonces, permite conectar las dos orillas del río Aluminé.<br><br>Desde este sector se puede apreciar la relación entre el río, el camino, la vegetación y los cerros que rodean la localidad. Frente al puente se encuentra una antigua casa donde funcionó el <strong>Registro Civil</strong>, un edificio que forma parte del patrimonio histórico local y conserva parte de la memoria de Aluminé.<br><br><strong>📸 Momento para una foto:</strong> buscá un lugar seguro desde donde puedas fotografiar el Puente Azul, el río y la antigua casa del Registro Civil.<br><br><strong>Recomendación:</strong> no te detengas sobre la calzada ni cruces fuera de los sectores permitidos. Estacioná en un lugar seguro y respetá la circulación.",
    direction: "Próxima parada: Balneario Municipal."
  },
  {
    id: 3,
    kicker: "Pausa junto al agua",
    title: "Balneario municipal",
    short: "Costa y espacio recreativo",
    coords: [-39.22975, -70.91208],
    image: "./assets/balneario-playa.webp",
    alt: "Playa Municipal junto al río Aluminé y los cerros",
    secondaryImage: "./assets/balneario-rio.webp",
    secondaryAlt: "Costa arbolada de la Playa Municipal de Aluminé",
    preserveAllImages: true,
    noteHtml: "La cuarta parada invita a disfrutar de una pausa junto al <strong>río Aluminé</strong>. La Playa Municipal es uno de los sectores más elegidos por su amplitud, su cercanía al pueblo y su costa de arena con aguas generalmente calmas. Durante la temporada cuenta con actividades organizadas, guardavidas y los servicios del camping y parador <strong>La Playa</strong>.<br><br>El río Aluminé recorre cerca de <strong>200 kilómetros</strong> y posee numerosos accesos para disfrutar de sus costas, su sombra y su paisaje. Además, es escenario de actividades como el kayak y la pesca deportiva. Sus aguas y las de sus afluentes —los ríos Quillén, Ruca Choroy y Pulmarí— albergan truchas arcoíris y marrones, convirtiendo a la zona en un destino destacado para la pesca con mosca. Aluminé es reconocida también como la <strong>Capital Nacional del Kayak</strong>.<br><br><strong>📸 Momento para una foto:</strong> buscá una vista donde se integren el río, la playa y los cerros que rodean la localidad.<br><br><strong>Recomendación:</strong> cuidá el lugar, llevate tus residuos y respetá la cartelería y las indicaciones de los guardavidas. Antes de ingresar al agua, comprobá que esté permitido y prestá atención a las condiciones del río.",
    direction: "Continuá por la RP 23 hacia el Museo El Charrúa."
  },
  {
    id: 4,
    kicker: "Memoria local",
    title: "Museo El Charrúa",
    short: "Historia e identidad",
    coords: [-39.2270021, -70.9129839],
    image: "./assets/museo-charrua.webp",
    alt: "Acceso al Museo Municipal y Centro de Interpretación El Charrúa",
    note: "La casona de la antigua estancia reúne historias, objetos y memoria local. Consultá los horarios vigentes antes de ingresar; su entorno también ayuda a leer el pasado de Aluminé.",
    direction: "Último tramo: seguí hacia el norte hasta la antigua usina."
  },
  {
    id: 5,
    kicker: "Final del recorrido",
    title: "Antigua usina del EPEN",
    short: "Historia y vista al Quilquelil",
    coords: [-39.2144148, -70.9157778],
    image: "./assets/usina-epen.webp",
    alt: "Antigua usina del EPEN y paisaje hacia el cerro Quilquelil",
    note: "Cierre del circuito junto a una usina histórica que continúa en funcionamiento. Desde el entorno se abre la vista hacia el cerro Quilquelil: observá la infraestructura sin acercarte a las áreas operativas.",
    direction: "Llegaste al final. Disfrutá la vista y regresá por la RP 23."
  }
];

const route = [
  // Inicio exacto en Minimercado Amancay y continuación por la RP 23.
  [-39.2428951, -70.9157080],
  [-39.2429449, -70.9160915],
  [-39.2427210, -70.9159835],
  [-39.2425417, -70.9158970],
  [-39.2423886, -70.9158212],
  [-39.2421561, -70.9157051],
  [-39.2418907, -70.9155498],
  [-39.2417953, -70.9154854],
  [-39.2417579, -70.9154569],
  [-39.2417214, -70.9154108],
  [-39.2416537, -70.9153162],
  [-39.2416064, -70.9152085],
  [-39.2415590, -70.9150686],
  [-39.2414592, -70.9146877],
  [-39.2414312, -70.9145147],
  [-39.2414027, -70.9143075],
  [-39.2413267, -70.9135886],
  [-39.2412935, -70.9132750],
  [-39.2412588, -70.9129698],
  [-39.2412324, -70.9128337],
  [-39.2411934, -70.9127244],
  [-39.2411269, -70.9125983],
  [-39.2410754, -70.9125383],
  [-39.2410417, -70.9124990],
  [-39.2409316, -70.9124213],
  [-39.2408050, -70.9123623],
  [-39.2406150, -70.9123124],
  [-39.2404269, -70.9122871],
  [-39.2402607, -70.9122858],
  [-39.2401153, -70.9123012],
  [-39.2400641, -70.9123160],
  [-39.2393591, -70.9125204],
  [-39.2391866, -70.9125500],
  [-39.2390122, -70.9125647],
  [-39.2388398, -70.9125580],
  [-39.2386756, -70.9125433],
  [-39.2375392, -70.9123837],
  [-39.2370885, -70.9123353],
  [-39.2357598, -70.9121924],
  [-39.2353617, -70.9121520],
  [-39.2350686, -70.9121224],
  [-39.2348353, -70.9121053],
  [-39.2342238, -70.9121003],
  [-39.2339423, -70.9121014],
  [-39.2337146, -70.9121146],
  [-39.2324017, -70.9122118],
  [-39.2323158, -70.9122090],
  [-39.2319955, -70.9122017],
  [-39.2314597, -70.9121589],
  [-39.2311931, -70.9121380],
  [-39.2309692, -70.9121438],
  [-39.2308003, -70.9121603],
  [-39.2303479, -70.9122232],
  [-39.2300060, -70.9122880],
  [-39.2293538, -70.9123708],
  [-39.2292045, -70.9124061],
  [-39.2290551, -70.9124767],
  [-39.2289598, -70.9125320],
  [-39.2286587, -70.9127069],
  [-39.2285633, -70.9127567],
  [-39.2284567, -70.9127871],
  [-39.2283354, -70.9128054],
  [-39.2282943, -70.9128116],
  [-39.2281084, -70.9128048],
  [-39.2278444, -70.9127511],
  [-39.2272197, -70.9126186],
  [-39.2269727, -70.9125549],
  [-39.2268475, -70.9125087],
  [-39.2263695, -70.9122942],
  [-39.2262473, -70.9122109],
  [-39.2259399, -70.9120015],
  [-39.2254523, -70.9116449],
  [-39.2241711, -70.9107078],
  [-39.2240199, -70.9106096],
  [-39.2238413, -70.9105113],
  [-39.2234410, -70.9103267],
  [-39.2232865, -70.9102749],
  [-39.2229828, -70.9101731],
  [-39.2227528, -70.9100997],
  [-39.2225548, -70.9100365],
  [-39.2217737, -70.9098855],
  [-39.2211401, -70.9097808],
  [-39.2206819, -70.9097396],
  [-39.2196822, -70.9096774],
  [-39.2194270, -70.9096909],
  [-39.2192010, -70.9097342],
  [-39.2189623, -70.9097811],
  [-39.2185363, -70.9099125],
  [-39.2181846, -70.9100861],
  [-39.2179174, -70.9102564],
  [-39.2175976, -70.9105307],
  [-39.2173473, -70.9107809],
  [-39.2171476, -70.9110286],
  [-39.2169115, -70.9113300],
  [-39.2164826, -70.9119379],
  [-39.2155258, -70.9133663],
  [-39.2154033, -70.9135846],
  [-39.2152922, -70.9138177],
  [-39.2151885, -70.9140795],
  [-39.2150769, -70.9143647],
  [-39.2149681, -70.9146171],
  [-39.2148541, -70.9148232],
  [-39.2145999, -70.9152102],
  [-39.2143616, -70.9155731]
];

const els = {
  map: document.querySelector("#map"),
  tiles: document.querySelector("#tile-layer"),
  markers: document.querySelector("#marker-layer"),
  overlay: document.querySelector("#route-overlay"),
  routePath: document.querySelector("#route-path"),
  routeShadow: document.querySelector("#route-shadow"),
  list: document.querySelector("#stops-list"),
  image: document.querySelector("#selected-image"),
  secondaryImage: document.querySelector("#selected-image-secondary"),
  thirdImage: document.querySelector("#selected-image-third"),
  media: document.querySelector("#selected-media"),
  number: document.querySelector("#selected-number"),
  kicker: document.querySelector("#selected-kicker"),
  title: document.querySelector("#selected-title"),
  note: document.querySelector("#selected-note"),
  direction: document.querySelector("#selected-direction"),
  prev: document.querySelector("#prev-stop"),
  next: document.querySelector("#next-stop"),
  progressLabel: document.querySelector("#progress-label"),
  progressPercent: document.querySelector("#progress-percent"),
  progressBar: document.querySelector("#progress-bar")
};

let selected = 0;
let zoom = 13;
let center = [-39.2305, -70.9135];
let dragging = false;
let moved = false;
let dragStart = null;
let centerStart = null;
let renderQueued = false;

function project(lat, lon, z = zoom) {
  const world = 256 * 2 ** z;
  const sin = Math.sin(lat * Math.PI / 180);
  const x = (lon + 180) / 360 * world;
  const y = (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * world;
  return [x, y];
}

function unproject(x, y, z = zoom) {
  const world = 256 * 2 ** z;
  const lon = x / world * 360 - 180;
  const n = Math.PI - (2 * Math.PI * y) / world;
  const lat = (180 / Math.PI) * Math.atan(Math.sinh(n));
  return [lat, lon];
}

function viewportPoint(coords) {
  const [cx, cy] = project(center[0], center[1]);
  const [px, py] = project(coords[0], coords[1]);
  return [px - cx + els.map.clientWidth / 2, py - cy + els.map.clientHeight / 2];
}

function queueRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    renderMap();
  });
}

function renderMap() {
  const width = els.map.clientWidth;
  const height = els.map.clientHeight;
  if (!width || !height) return;

  const [cx, cy] = project(center[0], center[1]);
  const left = cx - width / 2;
  const top = cy - height / 2;
  const tileMinX = Math.floor(left / 256);
  const tileMaxX = Math.floor((left + width) / 256);
  const tileMinY = Math.floor(top / 256);
  const tileMaxY = Math.floor((top + height) / 256);
  const tilesAcross = 2 ** zoom;

  els.tiles.replaceChildren();
  const fragment = document.createDocumentFragment();
  for (let ty = tileMinY; ty <= tileMaxY; ty++) {
    if (ty < 0 || ty >= tilesAcross) continue;
    for (let tx = tileMinX; tx <= tileMaxX; tx++) {
      const wrappedX = ((tx % tilesAcross) + tilesAcross) % tilesAcross;
      const img = document.createElement("img");
      img.alt = "";
      img.draggable = false;
      img.src = `https://tile.openstreetmap.org/${zoom}/${wrappedX}/${ty}.png`;
      img.style.left = `${tx * 256 - left}px`;
      img.style.top = `${ty * 256 - top}px`;
      fragment.append(img);
    }
  }
  els.tiles.append(fragment);

  const points = route.map(viewportPoint).map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const pathData = `M ${points.replaceAll(" ", " L ")}`;
  els.routePath.setAttribute("d", pathData);
  els.routeShadow.setAttribute("d", pathData);
  els.overlay.setAttribute("viewBox", `0 0 ${width} ${height}`);

  [...els.markers.children].forEach((marker, index) => {
    const [x, y] = viewportPoint(stops[index].coords);
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
  });
}

function buildMarkers() {
  stops.forEach((stop, index) => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "map-marker";
    marker.textContent = index + 1;
    marker.setAttribute("aria-label", `Parada ${index + 1}: ${stop.title}`);
    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      selectStop(index, true);
    });
    els.markers.append(marker);
  });
}

function buildStopList() {
  stops.forEach((stop, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "stop-card";
    card.dataset.index = index;
    card.innerHTML = `
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="card-copy"><strong>${stop.title}</strong><span>${stop.short}</span></span>
      <span class="card-arrow" aria-hidden="true">→</span>`;
    card.addEventListener("click", () => selectStop(index, true));
    els.list.append(card);
  });
}

function selectStop(index, moveMap = false) {
  selected = Math.max(0, Math.min(stops.length - 1, index));
  const stop = stops[selected];
  const count = selected + 1;
  const percent = Math.round((count / stops.length) * 100);

  els.image.src = stop.image;
  els.image.alt = stop.alt;
  if (stop.secondaryImage) {
    els.secondaryImage.src = stop.secondaryImage;
    els.secondaryImage.alt = stop.secondaryAlt;
    els.secondaryImage.hidden = false;
    els.media.classList.add("has-two");
  } else {
    els.secondaryImage.removeAttribute("src");
    els.secondaryImage.alt = "";
    els.secondaryImage.hidden = true;
    els.media.classList.remove("has-two");
  }
  if (stop.thirdImage) {
    els.thirdImage.src = stop.thirdImage;
    els.thirdImage.alt = stop.thirdAlt;
    els.thirdImage.hidden = false;
    els.media.classList.add("has-three");
  } else {
    els.thirdImage.removeAttribute("src");
    els.thirdImage.alt = "";
    els.thirdImage.hidden = true;
    els.media.classList.remove("has-three");
  }
  els.media.classList.toggle("preserve-secondary", Boolean(stop.preserveSecondary));
  els.media.classList.toggle("preserve-all", Boolean(stop.preserveAllImages));
  els.number.textContent = String(count).padStart(2, "0");
  els.kicker.textContent = stop.kicker;
  els.title.textContent = stop.title;
  if (stop.noteHtml) {
    els.note.innerHTML = stop.noteHtml;
  } else {
    els.note.textContent = stop.note;
  }
  els.direction.textContent = stop.direction;
  els.prev.disabled = selected === 0;
  els.next.disabled = selected === stops.length - 1;
  els.next.textContent = selected === stops.length - 1 ? "Fin del recorrido" : "Siguiente →";
  els.progressLabel.textContent = `Parada ${count} de ${stops.length}`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;

  [...els.list.children].forEach((card, i) => card.classList.toggle("active", i === selected));
  [...els.markers.children].forEach((marker, i) => marker.classList.toggle("active", i === selected));

  if (moveMap) {
    center = [...stop.coords];
    zoom = Math.max(zoom, 15);
    queueRender();
    document.querySelector(`.stop-card[data-index="${selected}"]`)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

function fitRoute() {
  const lats = route.map(point => point[0]);
  const lons = route.map(point => point[1]);
  const midLat = (Math.min(...lats) + Math.max(...lats)) / 2;
  const midLon = (Math.min(...lons) + Math.max(...lons)) / 2;
  center = [midLat, midLon];

  for (let candidate = 17; candidate >= 9; candidate--) {
    const projected = route.map(point => project(point[0], point[1], candidate));
    const xs = projected.map(point => point[0]);
    const ys = projected.map(point => point[1]);
    const routeWidth = Math.max(...xs) - Math.min(...xs);
    const routeHeight = Math.max(...ys) - Math.min(...ys);
    if (routeWidth <= els.map.clientWidth - 90 && routeHeight <= els.map.clientHeight - 100) {
      zoom = candidate;
      break;
    }
  }
  queueRender();
}

function changeZoom(delta) {
  zoom = Math.max(11, Math.min(17, zoom + delta));
  queueRender();
}

els.map.addEventListener("pointerdown", event => {
  if (event.target.closest("button, a")) return;
  dragging = true;
  moved = false;
  dragStart = [event.clientX, event.clientY];
  centerStart = project(center[0], center[1]);
  els.map.classList.add("dragging");
  els.map.setPointerCapture(event.pointerId);
});

els.map.addEventListener("pointermove", event => {
  if (!dragging) return;
  const dx = event.clientX - dragStart[0];
  const dy = event.clientY - dragStart[1];
  moved ||= Math.abs(dx) + Math.abs(dy) > 4;
  center = unproject(centerStart[0] - dx, centerStart[1] - dy);
  queueRender();
});

function endDrag(event) {
  dragging = false;
  els.map.classList.remove("dragging");
  if (els.map.hasPointerCapture?.(event.pointerId)) els.map.releasePointerCapture(event.pointerId);
}
els.map.addEventListener("pointerup", endDrag);
els.map.addEventListener("pointercancel", endDrag);

els.map.addEventListener("wheel", event => {
  event.preventDefault();
  changeZoom(event.deltaY < 0 ? 1 : -1);
}, { passive: false });

document.querySelector("#zoom-in").addEventListener("click", () => changeZoom(1));
document.querySelector("#zoom-out").addEventListener("click", () => changeZoom(-1));
document.querySelector("#fit-route").addEventListener("click", fitRoute);
els.prev.addEventListener("click", () => selectStop(selected - 1, true));
els.next.addEventListener("click", () => selectStop(selected + 1, true));

document.querySelector("#start-tour").addEventListener("click", () => {
  document.querySelector("#circuito").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => selectStop(0, true), 350);
});

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") selectStop(selected + 1, true);
  if (event.key === "ArrowLeft") selectStop(selected - 1, true);
});

window.addEventListener("resize", queueRender);
buildMarkers();
buildStopList();
selectStop(0);
requestAnimationFrame(fitRoute);
