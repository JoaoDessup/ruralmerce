import edge from "edge.js";
import { edgeIconify, addCollection } from 'edge-iconify';
import { icons as riIcons } from '@iconify-json/ri';

addCollection(riIcons);
edge.use(edgeIconify);

console.log("Edge Iconify plugin loaded!"); // Verificar se aparece no console