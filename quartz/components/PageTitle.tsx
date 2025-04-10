import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/eu.jpeg")
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="Logo" src={iconPath}/>
      </a>
      <a href={baseDir} class="title-text">{title}</a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Logo {
  max-height: 200px;
  min-height: 50px;
  max-width: 200px;
  min-width: 50px;
  margin: 0;
}
.title-text {
  margin-top: 0.5rem;

}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
