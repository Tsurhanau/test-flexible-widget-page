import { PageLayout } from "./PageLayout.enum";
import { PageSection, PageSectionSubItem } from "./PageSection.interface";

export interface PageConfig {
    layoutType: PageLayout;
    sections: PageSection<any>[];
}