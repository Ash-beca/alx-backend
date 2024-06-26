#!/usr/bin/env python3
"""Module defines `index_range` function
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return range of records given required page and its size

    Args:
        page: Page number requested
        page_size: Number of records to show per page

    Returns:
        Tuple of two with beginning and ending index
    """
    start_index = (page - 1) * page_size
    end_index = start_index  + page_size
    return (start_index , end_index)
