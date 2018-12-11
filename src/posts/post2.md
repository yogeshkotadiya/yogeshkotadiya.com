---
title: "Second Post"
author: "Yogesh Kotadiya"
slug: "postTwo"
date: "2018-12-04"
---

### Second Post

```javascript
const TopProjects = () => {
  return (
    <TopStyled>
      <StaticQuery
        query={TOP_PROJECTS_Query}
        render={data => {
          const node = data.github.viewer.pinnedRepositories.nodes;
          return node.map(repo => (
            <React.Fragment key={repo.url}>
              <div className="singleProject">
                <a target="_blank" rel="noopener noreferrer" href={repo.url}>
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </div>
            </React.Fragment>
          ));
        }}
      />
    </TopStyled>
  );
};
```
