
import "./load-url-data.js";
import { parseDataBindingSingle, parseDataBinding } from "../lib/element-data-binding.js";

parseDataBindingSingle(document.querySelector("title"));
parseDataBinding(document.body);