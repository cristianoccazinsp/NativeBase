const mapPropsToStyleNames = (styleNames, props) => {
  for (const [key, value] of Object.entries(props)) {
    if (value) {
      styleNames.push(key);
    }
  }

  return styleNames;
};

export default mapPropsToStyleNames;
