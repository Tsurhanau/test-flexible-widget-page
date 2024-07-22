import { ConfigurableType } from "./ConfigurableType.enum";
import { PageSectionName } from "./PageSectionName.enum";
import { ViewConfig } from "./ViewConfig.interface";
import { Widget } from "./Widget.interface";

export interface PageSection<T> {
    name: PageSectionName,
    viewConfig: ViewConfig,
    type: ConfigurableType,
    subItems?: Array<T>,
    metadata?: any
}

export type PageSectionSubItem = Widget;