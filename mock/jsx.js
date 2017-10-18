<Dropdown>
  A dropdown list
  <Menu>
    <MenuItem>Do Something</MenuItem>
    <MenuItem>Do Something Fun!</MenuItem>
    <MenuItem>Do Something Else</MenuItem>
  </Menu>
</Dropdown>;
<Box>
  {
    <Answer value={false} />
  }
  <Box.Comment {...props} content="Text Content">
    {tip}
  </Box.Comment>
</Box>;
